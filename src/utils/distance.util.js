// utils/distance.util.js

const distanceUtil = {
  // Calculate distance between two coordinates using Haversine formula
  calculateDistance: (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
  },

  // Convert coordinates format
  convertToGeoJSON: (longitude, latitude) => {
    return {
      type: 'Point',
      coordinates: [longitude, latitude],
    };
  },

  // Extract coordinates from GeoJSON
  extractCoordinates: (geoJSON) => {
    if (geoJSON && geoJSON.coordinates && geoJSON.coordinates.length === 2) {
      return {
        longitude: geoJSON.coordinates[0],
        latitude: geoJSON.coordinates[1],
      };
    }
    return null;
  },

  // Validate coordinates
  isValidCoordinates: (longitude, latitude) => {
    return (
      typeof longitude === 'number' &&
      typeof latitude === 'number' &&
      longitude >= -180 &&
      longitude <= 180 &&
      latitude >= -90 &&
      latitude <= 90
    );
  },
};

module.exports = distanceUtil;
