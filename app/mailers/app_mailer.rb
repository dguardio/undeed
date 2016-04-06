class AppMailer < ApplicationMailer

  default :from => 'zhuleijia@gmail.com'

  # send a signup email to the user, pass in the user object that
  # contains the user's email address
  def application_email(job)
    mail(
      to: job.employer.email,
      subject: 'Application Submistion Confirmation'
    )
  end
end
