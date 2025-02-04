import { noteShapeMigrations, noteShapeProps } from '@tldraw/tlschema'
import { defineShape } from '../../../config/defineShape'
import { NoteShapeUtil } from './NoteShapeUtil'

/** @public */
export const NoteShape = defineShape('note', {
	util: NoteShapeUtil,
	props: noteShapeProps,
	migrations: noteShapeMigrations,
})
