import { voidTags } from './Constants'

/**
 * checks if the tag is a void tag
 * @param {string} tag - the tag name
 */
export const isVoidTag = (tag: string): boolean => voidTags.includes(tag)

/**
 * Checks if the given string has whitespace characters
 * @param {string} str - the string to check
 */
export const hasWhitespace = (str: string): boolean => /\s/.test(str)
