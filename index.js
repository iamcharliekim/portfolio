let showMenu = false


// FUNCTIONS
function generateHomePage(){
	return `		<div class="home">
			<div class="hero">
				<div class="hero-header">
					<header>
						<div class="profile-pic-wrapper">
							<img src="images/profile.jpg" alt="" class="profile">
						</div>
						
					</header>

				
				<div class="hero-text">
					<h1>Charlie Kim</h1>

					<h2>Web Developer</h2>
					<br>

					<h3>I am currently based in the Washington D.C. area.</h3>
					<h4>I am a lover of dogs, music and all things code!</h4>
					
					<div class="cta-btns">
					<button class="cta-projects">Projects</button>
					<button class="cta-contact">Contact Me</button>
				</div>
				</div>


				</div>

	

				<br>
				

				
			</div>
		</div>	
	
	`
}

function generateAboutMePage (){
	return `	

	<div class="about-me">
		<div class="bio">
			<h1>About</h1>

			<h2>I am an aspiring Full Stack Web Developer currently based in the Washington D.C. area.</h2>
			<br>

			<h3>I specialize in designing and building interactive user interfaces that are conducive to a stimulating and engaging user experience.  </h3>
			
			<h4>When I’m not coding, you can find me playing guitar, composing and producing music, hiking, in a downward dog, or just catching up with friends over a cup of coffee!</h4>
		</div>
		<br>
</div>
`
}

function generateProjectsPage(){
	return `
<div class="projects-page">	
			<header>
							<h1>Projects</h1>

			</header>
						
				<div class="project1">
					<div class="left-side">
						

						<h2>The Red Hot Chili Peppers Quiz App</h2>

						<div class="description">
							This quiz app is a tribute to one of my favorite bands of all time, The Red Hot Chili Peppers!  Users are asked 5 multiple-choice RHCP-trivia questions and given feedback at the end to determine whether you are a fan, super-fan, or just a poser!  
						</div>
						
					</div>
										
					<div class="right-side">
						<div class="thumbnail-wrapper">
							<a href="https://iamcharliekim.github.io/rhcp-quizz-app/" target="_blank">
								<img src="images/rhcp-quiz-app-ss.png" alt="" class="quiz-app-ss">
							</a>
						</div>

							
					</div>
					
					

					

					
				</div>
				
				<div class="technologies">
								<ul class='tech-icons'>
									<li><img src="images/html5.svg" alt=""></li>
									<li><img src="images/css.svg" alt=""></li>
									<li><img src="images/javascript.svg" alt=""></li>
									<li><img src="images/jquery.svg" alt=""></li>
								</ul>
						</div>
				
				<div class="links">
						<a href="https://github.com/iamcharliekim/rhcp-quizz-app" target="_blank">
							<button>GitHub Repo</button>
						</a>
						
						<a href="https://iamcharliekim.github.io/rhcp-quizz-app/" target="_blank">						
							<button>See It Online</button>
						</a>
						
						
					</div>
					
	
		</div>
`
}

function generateContactPage(){
	return `<div class="contact-pg">
				<div class="contact-socials">
							<header><h1> Contact </h1></header>
			<br>
			<ul class="contact-socials-ul">
				<li><a href="mailto:cwkim3@gmail.com"><i class="fas fa-envelope"></i><span class="contact-text">cwkim3@gmail.com</span></a> </li>
				<li><a href="https://github.com/iamcharliekim" target="_blank"><i class="fab fa-github"></i><span class="contact-text">github.com/iamcharliekim</span></a></li>		
				<li><a href="https://www.linkedin.com/in/charleswkim/" target="_blank"><i class="fab fa-linkedin"></i><span class="contact-text">linkedin.com/in/charleswkim</span></a></li>
			</ul>
		</div>
		  
		 </div>

		`
}

function renderToPage(page){
	$('main').html(page)
}		


// DROP-DOWN MENU CLICK HANDLER
$('.dropdown-menu').on('click', (e)=>{
	showMenu = !showMenu
		
	if (showMenu){
		$('main').hide()
		$('footer').hide()
		$('.menu').css('display', 'flex')

	} else {
		$('.menu').css('display', 'none')
		$('main').show()
		$('footer').show()
	}
})

function homeGenerator(e){
	e.preventDefault()
	$('.menu').css('display', 'none');
	$('main').show()
	$('footer').show()
	renderToPage(generateHomePage())
}

function aboutGenerator(e){
	e.preventDefault()
	$('.menu').css('display', 'none');
	$('main').show()
	$('footer').show()
	renderToPage(generateAboutMePage())
}

function projectsGenerator(e){
	e.preventDefault()
	$('.menu').css('display', 'none');
	$('main').show();
	$('footer').show()

	renderToPage(generateProjectsPage())
}

function contactGenerator(e){
	e.preventDefault()
	$('.menu').css('display', 'none');
	$('main').show();
	$('footer').show()

	renderToPage(generateContactPage())
}


// HAMBURGER LINKS
$('.menu-home').on('click', (e)=>{
	 homeGenerator(e)
})

$('.about').on('click', (e)=>{
	 aboutGenerator(e)
})


$('.projects').on('click', (e)=>{
	projectsGenerator(e)
})


$('.contact').on('click', (e)=>{
	contactGenerator(e)
})



// NAVBAR LINKS
$('.home-icon').on('click', (e)=>{
	homeGenerator(e)
})

$('.nav-home').on('click', (e)=>{
	homeGenerator(e)
})

$('.nav-about').on('click', (e)=>{
	aboutGenerator(e)
})

$('.nav-projects').on('click', (e)=>{
	projectsGenerator(e)
})

$('.nav-contact').on('click', (e)=>{
	contactGenerator(e)
})

$('main').on('click', '.cta-projects', (e)=>{
	projectsGenerator(e)
})

$('main').on('click', '.cta-contact', (e)=>{
	contactGenerator(e)
})

renderToPage(generateHomePage())