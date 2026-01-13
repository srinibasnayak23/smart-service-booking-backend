// config/firebase.js
const admin = require('firebase-admin');
const envConfig = require('./env');

let firebaseApp;

const initializeFirebase = () => {
  try {
    // Check if Firebase service account key is provided
    if (!envConfig.FIREBASE_SERVICE_ACCOUNT_KEY) {
      console.warn('Firebase service account key not configured. FCM will be disabled.');
      return null;
    }

    // Initialize Firebase Admin SDK
    firebaseApp = admin.initializeApp({
      credential: admin.credential.cert(require(envConfig.FIREBASE_SERVICE_ACCOUNT_KEY)),
      projectId: envConfig.FIREBASE_PROJECT_ID,
    });

    console.log('Firebase initialized successfully');
    return firebaseApp;
  } catch (error) {
    console.error('Error initializing Firebase:', error.message);
    return null;
  }
};

const sendNotification = async (deviceToken, title, body, data = {}) => {
  try {
    if (!admin.apps.length) {
      throw new Error('Firebase not initialized');
    }

    const message = {
      notification: {
        title,
        body,
      },
      data,
      token: deviceToken,
    };

    const response = await admin.messaging().send(message);
    console.log('Notification sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Error sending notification:', error.message);
    throw error;
  }
};

const sendMulticast = async (deviceTokens, title, body, data = {}) => {
  try {
    if (!admin.apps.length) {
      throw new Error('Firebase not initialized');
    }

    const message = {
      notification: {
        title,
        body,
      },
      data,
    };

    const response = await admin.messaging().sendMulticast({
      ...message,
      tokens: deviceTokens,
    });

    console.log('Multicast notification sent:', response);
    return response;
  } catch (error) {
    console.error('Error sending multicast notification:', error.message);
    throw error;
  }
};

module.exports = {
  initializeFirebase,
  sendNotification,
  sendMulticast,
};
