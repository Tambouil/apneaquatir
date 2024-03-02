import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'

export default class RegisterController {
  renderView({ view }: HttpContext) {
    return view.render('pages/auth/register')
  }

  async handleForm({ auth, request, response }: HttpContext) {
    const { email, password, fullName } = request.only(['email', 'password', 'fullName'])

    const user = await User.create({ email, password, fullName })
    await auth.use('web').login(user)

    return response.redirect('/')
  }
}