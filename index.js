const express = require('express');
const app = express();

// Define route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to HealthTracker360! Our comprehensive health monitoring app tracks physical activity, nutrition, sleep, and vital signs. It provides personalized health insights and connects users with a community for motivation and support.');
});

// Define route for the physical activity page
app.get('/physical-activity', (req, res) => {
  res.send('Our physical activity tracking feature allows you to monitor your steps, distance, and calories burned, helping you to stay active and achieve your fitness goals.');
});

// Define route for the nutrition page
app.get('/nutrition', (req, res) => {
  res.send('Our nutrition tracking feature allows you to log your meals and track your calorie intake, helping you to maintain a healthy diet and achieve your weight loss goals.');
});

// Define route for the sleep page
app.get('/sleep', (req, res) => {
  res.send('Our sleep tracking feature allows you to monitor your sleep patterns and quality, helping you to identify factors that may be affecting your sleep and make adjustments for better rest.');
});

// Define route for the vital signs page
app.get('/vital-signs', (req, res) => {
  res.send('Our vital signs tracking feature allows you to monitor your heart rate, blood pressure, and other key health indicators, helping you to stay on top of your health and identify potential issues early.');
});

// Define route for the personalized health insights page
app.get('/personalized-health-insights', (req, res) => {
  res.send('Our personalized health insights feature uses machine learning algorithms to analyze your health data and provide personalized recommendations for improving your health and achieving your goals.');
});

// Define route for the community page
app.get('/community', (req, res) => {
  res.send('Our community feature connects you with other HealthTracker360 users for motivation and support, allowing you to share your progress, ask questions, and get inspired by others.');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});