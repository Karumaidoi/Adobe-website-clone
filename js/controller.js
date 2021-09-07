// 'use strict'
import * as model from './model.js';
import News from './views/test.js';

const sectionPlan = document.querySelector('.section-plans');
const btnBuy = document.querySelector('.btn-buy');
const linkHome = document.querySelector('.footer-nav');
const navHome = document.querySelector('.navigation');

btnBuy.addEventListener('click', function(e) {
    sectionPlan.scrollIntoView({behavior: 'smooth'});
})

linkHome.addEventListener('click', function(e) {
    e.preventDefault();

    navHome.scrollIntoView({behavior: 'smooth'})
})


//Adding a tabbed Component
const adobeWrapper = document.querySelector('.adobe-wrapper');
const adobeWrapperItems = document.querySelector('.link__item');
const linkItems = document.querySelectorAll('.item');

linkItems.forEach(l => l.addEventListener('click', function(e) {
    e.preventDefault();
}))

linkItems.forEach(t => t.addEventListener('click', function(e) {
    linkItems.forEach(t => t.classList.remove('item--active'))
    t.classList.add('item--active');
}));



//Using the data from the Model and Views
const controlNews = async function() {
    //taking in the data from the model
    await model.loadData(model.state.news);
    console.log(model.state.news);

    //Rendering it to the view
    News.render(model.state.news);
}

controlNews();



