import { css } from '@kuma-ui/core'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Content } from './-components/Content'
import { Selector } from './-components/Selector'

export const Route = createLazyFileRoute('/List')({
	component: () => (
		<div className={css`display: flex`}>
			<Selector />
			<Content />
		</div>
	),
})
