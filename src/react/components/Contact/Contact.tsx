import cl from './Contact.module.scss'
import { FormEvent, useState } from 'react'
import mailer from '../../../apis/mailer'

export default () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState<null | string>(null)
  const [isSent, setIsSent] = useState(false)

  async function onFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (name.trim() === '' || email.trim() === '' || message.trim() === '')
      return setError('Заполните все поля!')
    try {
      await mailer.post('/', { name, email, message })
    } catch (err) {
      return setError(
        err?.response?.data?.message ||
          'Свяжитесь другим способом, email сейчас не доступен! Или попробуйте еще раз.'
      )
    }
    setIsSent(true)
  }

  function onFocus() {
    setIsSent(false)
    setError(null)
  }

  return (
    <div>
      <h1>Написать мне</h1>
      <div className="paragraph">
        На этой странице вы можете отправить мне сообщение на электронную почту.
        Вы также можете со мной связаться через{' '}
        <a
          className="ordinary_link"
          href="https://t.me/Meyl_ON"
          target="_blank"
        >
          Telegram
        </a>{' '}
        или{' '}
        <a
          className="ordinary_link"
          href="https://vk.com/im?sel=391852632"
          target="_blank"
        >
          VK
        </a>
        .
      </div>
      <form className={cl.message_form} method="POST" onSubmit={onFormSubmit}>
        <div className="input_wrapper">
          <input
            type="text"
            className={cl.name_message}
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={onFocus}
          />
          <input
            type="email"
            className={cl.mail_message}
            placeholder="Email для ответа"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={onFocus}
          />
        </div>

        <textarea
          className={cl.message_textarea}
          placeholder="Текст сообщения"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onFocus={onFocus}
        />
        <div>
          <button className={cl.btn_submit} type="submit">
            Отправить
          </button>
        </div>
      </form>
      {isSent ? null : <p className={cl.error}>{error}</p>}
      {isSent ? (
        <p className={cl.send_message}>Сообщение успешно отправлено!</p>
      ) : null}
    </div>
  )
}
