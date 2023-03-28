/**
 * * 判断是否是开发环境
 * @return { Boolean }
 */
export const isDev = () => {
  return import.meta.env.DEV
}