import { defineConfig, devices } from "playwright/test";

export default defineConfig({
    // General exectuion 
    timeout: 240 * 1000,

    // Assertion
    expect:{
    timeout: 15000
    },

    testDir: './tests',
    fullyParallel: true,
     /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */ 
    retries: process.env.CI ? 2 : 0,
     /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    reporter: [['html',{open:"on-failure"}]],   
    use: {
        trace: 'on',
        headless: true,
        screenshot: "on",
        video: "on"
    },
    projects:[
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']},
            // testMatch: "example.sepc.ts",
            // testIgnore: "example.sepc.ts"
        },
    //     {
    //         name: 'firefox',
    //         use: { ...devices['Desktop Firefox'] },
    //     },
      
    //     {
    //         name: 'webkit',
    //         use: { ...devices['Desktop Safari'] },
    //     },
     ],

});