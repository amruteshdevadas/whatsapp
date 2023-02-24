const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || '9000',
    Meta_WA_accessToken:
        'EAAKBQIWASUwBAHiVG4BCOdNeN8FofydjJMkmsa9xrdiSqYjZALVb6odvQ1bzowkTZAOhWxdiSM9b2oDpSXFUrmk0EX4WpSZBZAzBDubUotkxkZA3iC5GEVfzdyzaquukqeMXKB2uDhPZAPUENN3YmAhLPfHPeXo0GlxB7aetLT5z32q5sXovDMz7J2DUZCCZCtFEmOT7SxSMR7wpS4tVGSZC3',
    Meta_WA_SenderPhoneNumberId: '101580936177175',
    Meta_WA_wabaId: '104193235911486',
    Meta_WA_VerifyToken: '12345',
};

const fallback = {
    ...process.env,
    NODE_ENV: undefined,
};

module.exports = (environment) => {
    console.log(`Execution environment selected is: "${environment}"`);
    return development;
    // if (environment === 'production') {
    //     return production;
    // } else if (environment === 'development') {
    //     return development;
    // } else {
    //     return fallback;
    // }
};
