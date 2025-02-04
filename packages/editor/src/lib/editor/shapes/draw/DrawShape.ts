import { drawShapeMigrations, drawShapeProps } from '@tldraw/tlschema'
import { defineShape } from '../../../config/defineShape'
import { DrawShapeUtil } from './DrawShapeUtil'

/** @public */
export const DrawShape = defineShape('draw', {
	util: DrawShapeUtil,
	props: drawShapeProps,
	migrations: drawShapeMigrations,
})
