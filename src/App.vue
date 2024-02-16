<template>
	<div>
		<div class="flex justify-content-center" style="height: 100dvh;">
			<div class="flex flex-column justify-content-center align-items-center py-8" style="height: 100dvh; width: 60dvw;">
				<div class="w-full" style="height: 30dvh;">
					<form 
					@submit.prevent="addTodo">
						<Textarea class="mb-1 w-full" v-model="Todo" rows="5" cols="30" placeholder="Add a Todo" />
						<Button class="w-full text-center" type="submit" size="small" label="Add"/>
					</form>
				</div>

				<p class="w-full" style="text-align: left;">Tasks: {{todos.length}}</p>
				<div style="height: 70dvh; overflow-y: scroll;">
					<div class="w-full mb-2" v-for="todo in todos" :key="todo.id">
						<Card class="w-full">
							<!-- <template #title>Todo 1</template> -->
							<template #content>
								<div class="flex">
									<p style="width: 80%;">
										{{todo.content}}
									</p>
									<div class="flex justify-content-center align-items-center" style="width: 20%;">
										<Button class="mr-1" icon="pi pi-check" size="small" severity="success"/>
										<Button icon="pi pi-trash" size="small" severity="danger" />
									</div>
								</div>
							</template>
						</Card>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'

	const todos = ref([
		{ 
			id: 1,
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
			done: false
		},
		{ 
			id: 2,
			content: " Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis.",
			done: false
		},
	])

	const Todo = ref('')

	const addTodo = () => {
		todos.value.push(
			{
				id: todos.value.length + 2,
				content: Todo.value,
				done: false
			}
			
		)

		console.log(todos.value)
	}
	
</script>

<style>
	body {
		padding: 0;
		margin: 0;
	}
</style>