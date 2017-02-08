//-------------------------------------
//TASK : Tabbed Content
// When a user selects a tab (e.g. <span class="tabcontent__tab" data-tab="press">Press</span>)
//    it should 
//       (1) give that element a class of 'active'
//       (2) remove the class of active from the <span> element that is no longer active
//       (3) inject the relevant HTML content into <div class="tabcontent__content">
//            (the html content is included below )
//-------------------------------------

var pageContentObj = {
	home:  `
		<div class="main">
			 
		<h2>Join Us Today!</h2>
		<p>You can be part of the Paley Center community as an <em>Individual Member</em>, <em>Patron Member</em>, <em>Media Council Member</em>, or <em>Corporate Member</em>. All include very special benefits for YOU while supporting the Paley Center’s essential programs.</p>
		<p class="smalltext">The Paley Center is a 501(c)3 nonprofit organization; our work and programs are dependent on your support.</p>
			 
		</div>
	`,
	screenings:  `
		<h2>Screenings</h2>
		<p>Saturdays and Sundays in New York and Los Angeles</p>
		<p>12:15 to 4:00 pm local time • FREE Admission</p>

		<a href="#"> Visit New York</a>  |  <a>Visit Los Angeles</a>

		<p>Weekend Screenings from the Paley Archive on the Big Screen in NY & LA offer great family entertainment, PLUS programming selected by our Members and screened for the public. You haven't really experienced TV until you've seen it on a movie-size screen with fellow fans.</p>
	`,
	press: `
			<h2>Press</h2>
			<hr/>
			
			<h4>Current Press Releases</h4>
			<p><small>Read More</small></p>
			<hr/>
			<h4>Press Release Archive</h4>
			<p><small>Read More</small>
			<hr/>
			<h4>Press Kit/Logos</h4>
			<p>View and download press materials.</p>
			<p><small>Read More</small>
			<hr/>

			<h4>Register for Press Information</h4>
			<p><small>Click to fill out the form</small></p>
	`,
	programs:  `
		<h2>Public Programs</h2>
		<ul>
			<li>PaleyLive LA</li>
			<li>PaleyLive NY</li>
			<li>Paley Impact</li>
			<li>Patron Circle & President's Circle</li>
		</ul>
	`
}

var tabsContainerEl = document.querySelector('.tabcontent__list')

function renderActiveTab(theCurrentRoute){
	// var previousActiveTabEl = document.querySelector('.tabcontent__tab.active')
	var previousActiveTabEl = document.querySelector('[class="tabcontent__tab active"]')
	previousActiveTabEl.classList.remove('active')
	
	var currentActiveTabEl = document.querySelector(`[data-route="${theCurrentRoute}"]`)
	currentActiveTabEl.classList.add('active')
}

function renderContentTo(domEl, theRoute, theContent){
	
	if( theRoute === 'home' ){  return domEl.innerHTML = theContent[theRoute] }
	if( theRoute === 'programs' ){  return domEl.innerHTML = theContent[theRoute] }
	if( theRoute === 'screenings' ){ return  domEl.innerHTML = theContent[theRoute] }
	if( theRoute === 'press' ){  return domEl.innerHTML = theContent[theRoute] }
	
	domEl.innerHTML = theContent.home
	window.location.hash = ''
}

var controllerRouter = function(){
	var currentRoute = window.location.hash.slice(1)
	if(currentRoute.length === 0){ currentRoute = 'home' }
	var pageContentEl = document.querySelector('.page_content')
	renderActiveTab(currentRoute)
	renderContentTo(pageContentEl, currentRoute, pageContentObj)
}


tabsContainerEl.addEventListener('click', function(evt){
	var clickedTabEl = evt.target
	var route = clickedTabEl.dataset.route
	window.location.hash = route
})


controllerRouter()
window.addEventListener('hashchange', controllerRouter)
