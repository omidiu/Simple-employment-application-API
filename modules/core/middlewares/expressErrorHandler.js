const expressErrorHandler = (err, req, res, next) => {
    console.log('Response error handler:');
    console.log(err);
    
    const { msgFa = "خطایی رخ داده است!", msgEn = "Something went wrong!", status = 500, detail } = err


    res.status(status).json({
        success: false,
        error: {
            msgFa,
            msgEn,
            detail
        },
    });
  
};

module.exports = expressErrorHandler;
