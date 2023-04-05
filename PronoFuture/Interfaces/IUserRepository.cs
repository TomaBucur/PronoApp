using PronoFuture.DTOs;
using PronoFuture.Helper;

namespace PronoFuture.Interfaces
{
    public interface IUserRepository
    {
        Task<UserManagerResponse> RegisterUserAsync(UserDTO model);
    }
}
