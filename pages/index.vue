<template>
    <div>
        <div class="flex items-center justify-center mt-0 sm:mt-32">
            <div class="text-center">
                <h2 class="text-4xl sm:text-6xl">
                    Hi there, I'm Lloyd
                </h2>
                <h3 class="text-3xl text-gray-700 sm:text-5xl">
                    I make things
                </h3>
                <!-- https://codepen.io/Ninaiskel/pen/MWWgMwL -->
                <div class="shape-container">
                    <div class="shape" />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
:root {
	--background: #005;
	--primary: #88D5BF;
	--secondary: #5D6BF8;
	--third: #e27fcb;
}

.shape-container {
  align-items: center;
  display: flex;
  justify-content: center;
}

.shape {
 	background: linear-gradient(45deg, var(--primary) 0%, var(--secondary) 100%);
  animation: morph 16s ease-in-out infinite;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  height: 400px;
  transition: all 1s ease-in-out;
  width: 400px;
  z-index: 5;
}

@keyframes morph {
  0% {
			border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%;
			background: linear-gradient(45deg, var(--primary) 0%, var(--secondary) 100%);
	} 
	
	50% {
			border-radius:  30% 60% 70% 40% / 50% 60% 30% 60%;
			background: linear-gradient(45deg, var(--primary) 0%, var(--secondary) 100%);
	}
  
	100% {
		border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%;
		background: linear-gradient(45deg, var(--primary) 0%, var(--secondary) 100%);
	} 
}

</style>