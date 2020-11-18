<template>
    <div>
        <div class="flex items-center justify-center mt-0 sm:mt-64">
            <div class="text-center">
                <h2 class="text-4xl sm:text-6xl">
                    Hi there, I'm Lloyd
                </h2>
                <h3 class="text-3xl text-gray-700 sm:text-5xl">
                    I make things
                </h3>
            </div>
        </div>
        <Feature name="Physics">
            <div class="flex flex-col items-center justify-center group">
                <div>
                    <InteractivePhysics />
                </div>
                <!-- <DemoButton>Test Button</DemoButton> -->
                <div class="p-10 transition duration-200 ease-in-out group hover:opacity-100">
                    <div class="space-x-4 ">
                        <Button>
                            Circle
                        </Button>

                        <Button>
                            Square
                        </Button>

                        <Button>
                            Speed Up
                        </Button>

                        <Button>
                            Slow Down
                        </Button>
                    </div>
                </div>
            </div>
        </Feature>
    </div>
</template>

<script>
export default {

}
</script>