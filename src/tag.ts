import { hasWhitespace, isVoidTag } from './utils'

export const tag = (
    name: string,
    attribs?: Record<string, string | number> | string,
    ...children: string[]
): string => {
    if (hasWhitespace(name)) throw new Error('tag name cannot contain whitespace characters')
    const attributes = new Array<string>()

    if (typeof attribs === 'string') children.unshift(attribs)
    else if (attribs) Object.entries(attribs).forEach(([key, value]) => attributes.push(`${key}="${value}"`))

    return `<${name} ${attributes.join(' ')}>${isVoidTag(name) ? '' : `${children.join('')}</${name}>`}`
}
