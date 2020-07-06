// var createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const authMiddleware = require('./middleware/auth')
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const loginRouter = require('./routes/login')
const logoutRouter = require('./routes/logout')
const resumeRouter = require('./routes/resume')
const previewRouter = require('./routes/preview')
const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(authMiddleware.info)
app.use('/login', authMiddleware.needLogout)
app.use('/resumes', authMiddleware.auth)
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/login', loginRouter)
app.use('/logout', logoutRouter)
app.use('/resumes', resumeRouter)
app.use('/preview', previewRouter)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.redirect('/')
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
