import dataDiaries from './diaries.json'
import { DiaryEntry } from '../types'

const diaries: Array<DiaryEntry> = dataDiaries as Array<DiaryEntry>

export const getEntries = () => diaries

export const addEntry = () => null