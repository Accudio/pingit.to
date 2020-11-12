import { useEffect, useCallback, useState } from 'react'

export default function Time() {
  const [ date, setDate ] = useState(null)
  const [ currTime, setCurrTime ] = useState(null)

  const updateTime = useCallback(() => {
    const now = new Date()
    const hours = ('0' + now.getHours()).slice(-2)
    const mins = ('0' + now.getMinutes()).slice(-2)
    setCurrTime(`${hours}:${mins}`)
  }, [setCurrTime])

  const setTime = useCallback(() => {
    updateTime()
    setDate(new Date().toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }))

    setInterval(updateTime, 1000)
  }, [setDate, updateTime])

  useEffect(() => {
    setTime()
  })

  return (
    <time className="align-center leading-tight">
      <div className="text-major weight-bold">{currTime}</div>
      {date}
    </time>
  )
}
