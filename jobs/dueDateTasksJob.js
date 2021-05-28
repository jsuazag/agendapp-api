import cron from 'node-cron';

cron.schedule('* * * * *', () => {
    console.log('cron executing...');
});

export default cron;