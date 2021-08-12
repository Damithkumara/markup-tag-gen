import { hasWhitespace, isVoidTag } from './utils'

/**
 * Function to generate tags
 * @param {string}name - the name of the root tag
 * @param attribs - attribs of the root tag or first child
 * @param {Array<string>}children - child tags
 * @returns {string} - the html string
 *
 * Example:
 * ```ts
 * import { tag } from 'markup-tag-gen'
 *
 * tag('div', {class: 'test'}, 'Hello World')
 * ```
 */
export const tag = (
    name: string,
    attribs?: Record<string, string | number> | string,
    ...children: string[]
): string => {
    if (hasWhitespace(name)) throw new Error('tag name cannot contain whitespace characters')
    const attributes = new Array<string>()

    if (typeof attribs === 'string') children.unshift(attribs)
    else if (attribs) Object.entries(attribs).forEach(([key, value]) => attributes.push(` ${key}="${value}"`))
    return `<${name}${attributes.join('')}>${isVoidTag(name) ? '' : `${children.join('')}</${name}>`}`
}
