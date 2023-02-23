const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || '9000',
    Meta_WA_accessToken:
        'EAAKBQIWASUwBALZAh4s75gFGoZBvMyxb6aizDmQVnPvnyrPNSGW4FEs1maw3JGT4ZCnv6adIZCPocRsY4bYymPiznv5ZArJVce4UGrLWxqpS1Egn38dN2H8QfAEqKhH7pXPkBVDWBLZCpz0JMAZAZCMPsYzynwWIrnh4fJKL1CZBaOB4E1cg3F8ZB6YHPHhfbYqHEI3M7ZA7ZAeZC9DfiUafYZCIGJ',
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
