const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || '9000',
    Meta_WA_accessToken:
        'EAAKBQIWASUwBAK8zMx2WQqxhizCTtgsPv3qkWQ2R6Q4QZBw6pGPkDraE5wZCp0053YNyZBMmsZC2M4n8FyNZCkoIqm0ZAMJRgUjPkZCukM988mZCqZAneX0lODn8oQpXDlEDGRMjqCQNWitcAaL4D6OzCR5AZC1Dw9FKFZCNpy5JXkcn1YTk54JW9o3qZBmrJbYbM9MQIl4PyvwSf0SGI6C4ZAxdN',
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
