let showMenu = false


// FUNCTIONS
function generateAboutMePage (){
	return `	

	<div class="about-me">
		<br>
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
					<br>
						
				<div class="project1">
					<div class="left-side">
						

						<h2>The Red Hot Chili Peppers Quiz App</h2>

						<div class="description">
							Find out what kind of RHCP fan you are by taking this quiz.  Users are asked 5 multiple-choice RHCP-trivia questions and given feedback at the end to determine whether you are a fan, super-fan, or just a poser!  
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
		<form action="/signup" method="post" class="form">
			<fieldset name="contact-me">
			<legend><h1>Contact</h1></legend>
			  <label for="name">Name</label>
			  <input placeholder="Name" type="text" name="name" id="name" required autofocus>
			  
			  <label for="email">Email</label>
			  <input placeholder="Email" type="email" name="email" id="email" required>
			  
			  <label for="subject">Subject</label>
			  <input placeholder="Subject" type="text" name="subject" id="subject" required>
			  
			  <label for="message">Message</label>
			  <textarea name="Message" id="message" cols="" rows="" class="form-msg"></textarea>

	      		<br>
			  <button type="submit">Submit</button>
			</fieldset>

		  </form>
		  
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

// HAMBURGER LINKS

$('.about').on('click', (e)=>{

	e.preventDefault()
	$('.menu').css('display', 'none');
	$('main').show()
	$('footer').show()


	renderToPage(generateAboutMePage())

	
})

$('.projects').on('click', (e)=>{
	e.preventDefault()
		$('.menu').css('display', 'none');
		$('main').show();
		$('footer').show()

		renderToPage(generateProjectsPage())
})

$('.contact').on('click', (e)=>{
	e.preventDefault()
	$('.menu').css('display', 'none');
	$('main').show();
	$('footer').show()

	renderToPage(generateContactPage())
})

// NAVBAR LINKS

$('.nav-about').on('click', (e)=>{

	e.preventDefault()
	$('.menu').css('display', 'none');
	$('main').show()
	$('footer').show()


	renderToPage(generateAboutMePage())

	
})

$('.nav-projects').on('click', (e)=>{
	e.preventDefault()
		$('.menu').css('display', 'none');
		$('main').show();
		$('footer').show()

		renderToPage(generateProjectsPage())
})

$('.nav-contact').on('click', (e)=>{
	e.preventDefault()
	$('.menu').css('display', 'none');
	$('main').show();
	$('footer').show()

	renderToPage(generateContactPage())
})
