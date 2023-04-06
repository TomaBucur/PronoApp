using PronoFuture.Interfaces;

namespace PronoFuture.Services
{
    public class SendGridMailService : IMailService
    {
        public Task SendMail(string toMail, string subject, string mail)
        {
            throw new NotImplementedException();
        }
    }
}
