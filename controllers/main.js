// controllers/homeController.js
const getHomePage = (req, res) => {
    res.render('home');
};

const getAboutPage = (req, res) => {
    res.render('about');
};

const getContactPage = (req, res) => {
    res.render('contact');
};

const getDonatePage = (req, res) => {
    res.render('donate');
};

// controllers/blogController.js
const getBlogsPage = (req, res) => {
    // Fetch and pass blog data to the view
    res.render('blogs');
};
const getAddBlogPage = (req, res) => {
    // Fetch and pass individual blog data to the view
    res.render('add-blogPost');
};
const getSingleBlogPage = (req, res) => {
    // Fetch and pass individual blog data to the view
    res.render('single-blog');
};

const getCreateBlogPage = (req, res) => {
    res.render('create-blog');
};

// controllers/volunteerController.js
const getVolunteerPage = (req, res) => {
    // Fetch and pass volunteer data to the view
    res.render('volunteer');
};

const getAddVolunteerPage = (req, res) => {
    res.render('add-volunteer');
};

// controllers/eventController.js
const getEventsPage = (req, res) => {
    // Fetch and pass event data to the view
    res.render('events');
};

const getSingleEventPage = (req, res) => {
    // Fetch and pass individual event data to the view
    res.render('single-event');
};

const getAddEventPage = (req, res) => {
    res.render('add-event');
};

// controllers/causeController.js
const getCausesPage = (req, res) => {
    // Fetch and pass cause data to the view
    res.render('causes');
};

const getSingleCausePage = (req, res) => {
    // Fetch and pass individual cause data to the view
    res.render('single-cause');
};
const getAddCausePage = (req, res) => {
    // Fetch and pass individual blog data to the view
    res.render('add-cause');
};

module.exports = {
    // Home Controller Functions
    getHomePage,
    getAboutPage,
    getContactPage,
    getDonatePage,

    // Blog Controller Functions
    getBlogsPage,
    getSingleBlogPage,
    getCreateBlogPage,
    getAddBlogPage,

    // Volunteer Controller Functions
    getVolunteerPage,
    getAddVolunteerPage,

    // Event Controller Functions
    getEventsPage,
    getSingleEventPage,
    getAddEventPage,

    // Cause Controller Functions
    getCausesPage,
    getSingleCausePage,
    getAddCausePage,

};
