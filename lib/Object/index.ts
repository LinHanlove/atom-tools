/**
 * @function 从对象中筛选出指定键的属性，并返回一个新对象。
 * @template T 表示对象的类型，它必须是带有键的普通对象。
 * @template K 表示要筛选的键的类型，它是 T 的键的子集。
 * @param obj 需要从中筛选属性的对象。
 * @param keys 需要筛选出来的键的数组。
 * @throws 如果传入的参数为 null 或 undefined 将抛出错误
 * @returns 返回一个新对象，它只包含 `keys` 数组中指定的键及其对应的值。
 */
export const pick = <T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
  // 参数验证
  if (obj == null) {
    throw new TypeError('参数 obj 不能为 null 或 undefined')
  }
  if (!Array.isArray(keys)) {
    throw new TypeError('参数 keys 必须是数组')
  }

  // 处理空数组的情况
  if (keys.length === 0) {
    return {} as Pick<T, K>
  }

  // 使用 Object.create(null) 创建一个没有原型链的纯对象
  const result = Object.create(null) as Pick<T, K>

  // 使用 for...of 循环代替 reduce，可能在某些情况下性能更好
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key]
    }
  }

  return result
}
