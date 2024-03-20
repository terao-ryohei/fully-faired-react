import { css } from '@kuma-ui/core'

export const Selector = () => {
	return (
		<>
			<div id='todo-app'>
				<input type='text' id='new-task' placeholder='新しいタスクを入力' />
				<button id='add-task' type='button'>
					追加
				</button>
				<ul id='task-list' />
			</div>
		</>
	)
}
