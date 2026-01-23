// utils/response.util.js

/**
 * Response utility for consistent API responses
 * All responses include: success, statusCode, message, timestamp
 * Success responses include: data (when applicable) or pagination
 * Error responses may include: errors array for validation errors
 */

const responseUtil = {
  /**
   * Success response (default 200 OK)
   * @param {Object} res - Express response object
   * @param {any} data - Response data
   * @param {string} message - Response message
   * @param {number} statusCode - HTTP status code (default: 200)
   */
  success: (res, data, message = 'Success', statusCode = 200) => {
    res.status(statusCode).json({
      success: true,
      statusCode,
      message,
      data,
      timestamp: new Date().toISOString(),
    });
  },

  /**
   * Error response (default 500)
   * @param {Object} res - Express response object
   * @param {string} message - Error message
   * @param {number} statusCode - HTTP status code (default: 500)
   * @param {Object} errors - Validation or detailed errors (optional)
   */
  error: (res, message = 'Internal Server Error', statusCode = 500, errors = null) => {
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
      ...(errors && { errors }),
      timestamp: new Date().toISOString(),
    });
  },

  /**
   * Paginated response for list endpoints
   * @param {Object} res - Express response object
   * @param {Array} data - Array of items
   * @param {number} page - Current page number
   * @param {number} limit - Items per page
   * @param {number} total - Total count of items
   * @param {string} message - Response message (default: 'Success')
   * @param {number} statusCode - HTTP status code (default: 200)
   */
  paginated: (res, data, page, limit, total, message = 'Success', statusCode = 200) => {
    const totalPages = Math.ceil(total / limit);
    res.status(statusCode).json({
      success: true,
      statusCode,
      message,
      data,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasMore: page < totalPages,
      },
      timestamp: new Date().toISOString(),
    });
  },

  /**
   * Created response (201 Created)
   * @param {Object} res - Express response object
   * @param {any} data - Created resource data
   * @param {string} message - Response message (default: 'Created successfully')
   * @param {number} statusCode - HTTP status code (default: 201)
   */
  created: (res, data, message = 'Created successfully', statusCode = 201) => {
    res.status(statusCode).json({
      success: true,
      statusCode,
      message,
      data,
      timestamp: new Date().toISOString(),
    });
  },

  /**
   * Bad Request response (400)
   * @param {Object} res - Express response object
   * @param {string} message - Error message
   * @param {Array} errors - Validation errors (optional)
   */
  badRequest: (res, message = 'Bad Request', errors = null) => {
    res.status(400).json({
      success: false,
      statusCode: 400,
      message,
      ...(errors && { errors }),
      timestamp: new Date().toISOString(),
    });
  },

  /**
   * Unauthorized response (401)
   * @param {Object} res - Express response object
   * @param {string} message - Error message
   */
  unauthorized: (res, message = 'Unauthorized') => {
    res.status(401).json({
      success: false,
      statusCode: 401,
      message,
      timestamp: new Date().toISOString(),
    });
  },

  /**
   * Forbidden response (403)
   * @param {Object} res - Express response object
   * @param {string} message - Error message
   */
  forbidden: (res, message = 'Forbidden') => {
    res.status(403).json({
      success: false,
      statusCode: 403,
      message,
      timestamp: new Date().toISOString(),
    });
  },

  /**
   * Not Found response (404)
   * @param {Object} res - Express response object
   * @param {string} message - Error message
   */
  notFound: (res, message = 'Not Found') => {
    res.status(404).json({
      success: false,
      statusCode: 404,
      message,
      timestamp: new Date().toISOString(),
    });
  },

  /**
   * Conflict response (409)
   * @param {Object} res - Express response object
   * @param {string} message - Error message
   */
  conflict: (res, message = 'Conflict') => {
    res.status(409).json({
      success: false,
      statusCode: 409,
      message,
      timestamp: new Date().toISOString(),
    });
  },

  /**
   * Unprocessable Entity response (422)
   * @param {Object} res - Express response object
   * @param {string} message - Error message
   * @param {Array} errors - Validation errors (optional)
   */
  unprocessable: (res, message = 'Unprocessable Entity', errors = null) => {
    res.status(422).json({
      success: false,
      statusCode: 422,
      message,
      ...(errors && { errors }),
      timestamp: new Date().toISOString(),
    });
  },

  /**
   * No Content response (204)
   * @param {Object} res - Express response object
   */
  noContent: (res) => {
    res.status(204).send();
  },

  /**
   * Accepted response (202)
   * @param {Object} res - Express response object
   * @param {any} data - Response data (optional)
   * @param {string} message - Response message
   */
  accepted: (res, data = null, message = 'Request accepted and processing') => {
    const response = {
      success: true,
      statusCode: 202,
      message,
      timestamp: new Date().toISOString(),
    };
    if (data) response.data = data;
    res.status(202).json(response);
  },

  /**
   * Server Error response (500)
   * @param {Object} res - Express response object
   * @param {string} message - Error message
   * @param {boolean} includeStack - Include error stack in development
   */
  serverError: (res, message = 'Internal Server Error', includeStack = false) => {
    const response = {
      success: false,
      statusCode: 500,
      message,
      timestamp: new Date().toISOString(),
    };
    if (includeStack && process.env.NODE_ENV === 'development') {
      response.note = 'Stack trace available in development mode';
    }
    res.status(500).json(response);
  },
};

module.exports = responseUtil;
