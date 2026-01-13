// utils/response.util.js

const responseUtil = {
  success: (res, data, message = 'Success', statusCode = 200) => {
    res.status(statusCode).json({
      success: true,
      statusCode,
      message,
      data,
      timestamp: new Date().toISOString(),
    });
  },

  error: (res, message = 'Internal Server Error', statusCode = 500, errors = null) => {
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
      ...(errors && { errors }),
      timestamp: new Date().toISOString(),
    });
  },

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

  created: (res, data, message = 'Created successfully', statusCode = 201) => {
    res.status(statusCode).json({
      success: true,
      statusCode,
      message,
      data,
      timestamp: new Date().toISOString(),
    });
  },

  badRequest: (res, message = 'Bad Request', errors = null) => {
    res.status(400).json({
      success: false,
      statusCode: 400,
      message,
      ...(errors && { errors }),
      timestamp: new Date().toISOString(),
    });
  },

  unauthorized: (res, message = 'Unauthorized') => {
    res.status(401).json({
      success: false,
      statusCode: 401,
      message,
      timestamp: new Date().toISOString(),
    });
  },

  forbidden: (res, message = 'Forbidden') => {
    res.status(403).json({
      success: false,
      statusCode: 403,
      message,
      timestamp: new Date().toISOString(),
    });
  },

  notFound: (res, message = 'Not Found') => {
    res.status(404).json({
      success: false,
      statusCode: 404,
      message,
      timestamp: new Date().toISOString(),
    });
  },
};

module.exports = responseUtil;
