/**
 * Represents a node in a markdown list structure, potentially containing nested children.
 * 
 * @property {string} mc - The main content of the list item.
 * @property {MarkdownList[]} [child] - An optional array of nested MarkdownList items representing sub-items.
 */
export interface MarkdownList {
  mc: string
  child?: MarkdownList[]
}

/**
 * Recursively generates a markdown formatted string from an array of MarkdownList objects.
 * 
 * This function takes an array of MarkdownList items and an optional indentation level (default is 0),
 * then constructs a markdown list string where each item is prefixed by hyphens according to its depth in the hierarchy.
 * 
 * @param {MarkdownList[]} arr - The array of MarkdownList items to be converted into markdown format.
 * @param {number} [jb=0] - The initial indentation level, with each level adding 4 spaces. Defaults to 0.
 * 
 * @returns {string} A string representing the markdown formatted list.
 * 
 * @example
 * const markdownList = [
 *   { mc: 'Item 1' },
 *   { mc: 'Item 2', child: [{ mc: 'Subitem 1' }] }
 * ];
 * console.log(getMarkDownList(markdownList));
 * // Output:
 * // - Item 1
 * // - Item 2
 * //     - Subitem 1
 */
export function getMarkDownList(arr: MarkdownList[], jb: number = 0): string {
  const zbf = (jb ? ' '.repeat(jb * 4) : '') + '- ';
  return arr.map(({ mc, child }: MarkdownList) => {
    if (child)
      return zbf + mc + '\n' + getMarkDownList(child, jb + 1);
    return zbf + mc;
  }).join('\n');
}