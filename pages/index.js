import React, { useContext } from "react";
import { Context } from "../context";
import { useRouter } from "next/router"
import axios from "axios";
export default function Auth() {
  const {
    setUsername,
    setSecret,
    username,
    secret
  } = useContext(Context)

  // project id - 7371b8bb - 6581 - 43fd - 9290 - ab3787d94447

  const onSubmit = (e) => {
    e.preventDefault();
    if (username.lenght === 0 || secret.lenght === 0) return;
    try {
      axios.put("https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-Key": '78c677b5-f865-4d23-8a82-8fe9dc1f8d96' } }
      )
        .then(response => router.push('/chats'))
    }
    catch (e) {
      console.log(e);
    }
  }

  const router = useRouter();


  return <div className="background">
    <div className="auth-container">
      <form className="auth-form" onSubmit={e => onSubmit(e)}>
        <div className="auth-title">TalkTime</div>

        {/* email */}

        <div className="input-container">
          <input type="email" placeholder="Email" className="text-input"
            onChange={e => setUsername(e.target.value)}
          />
        </div>

        {/* password */}

        <div className="input-container">
          <input type="password" placeholder="Password" className="text-input"
            onChange={e => setSecret(e.target.value)}
          />
        </div>

        <button type="submit" className="submit-button">Login/Sign Up</button>
      </form>
    </div>
  </div>
}
