async function delay (ms: number): Promise<void> {
  await new Promise<number>((resolve) => setTimeout(resolve, ms))
}
export default delay
