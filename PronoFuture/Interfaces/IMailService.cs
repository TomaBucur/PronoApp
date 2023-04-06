namespace PronoFuture.Interfaces
{
    public interface IMailService
    {
        Task SendMail(string toMail, string subject, string mail);
    }
}
