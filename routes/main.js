const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main');
const mainPostController = require('../controllers/main-posts');


router.get('/', mainController.getHomePage);
router.get('/about', mainController.getAboutPage);
router.get('/contact', mainController.getContactPage);
router.get('/donate', mainController.getDonatePage);
router.get('/blogs', mainController.getBlogsPage);
router.get('/blogs/:id', mainController.getSingleBlogPage);
router.get('/create-blog', mainController.getCreateBlogPage);
router.get('/volunteer', mainController.getVolunteerPage);
router.get('/add-volunteer', mainController.getAddVolunteerPage);
router.get('/events', mainController.getEventsPage);
router.get('/events/:id', mainController.getSingleEventPage);
router.get('/add-event', mainController.getAddEventPage);
router.get('/causes', mainController.getCausesPage);
router.get('/causes/:id', mainController.getSingleCausePage);
router.get('/add-blog', mainController.getAddBlogPage);
router.get('/add-cause', mainController.getAddCausePage);


// Route to handle adding or updating data
router.post('/addOrUpdateData', mainPostController.addOrUpdateData);


module.exports = router;
