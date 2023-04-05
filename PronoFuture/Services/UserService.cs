using Microsoft.AspNetCore.Identity;
using PronoFuture.DTOs;
using PronoFuture.Helper;
using PronoFuture.Interfaces;
using PronoFuture.Models;

namespace PronoFuture.Services
{
    public class UserService : IUserRepository
    {
        private UserManager<User> _userManager;

        public UserService(UserManager<User> userManager)
        {
            _userManager = userManager;
        }
        public async Task<UserManagerResponse> RegisterUserAsync(UserDTO model)
        {
            if(model == null)
            {
                throw new NullReferenceException("Register Model is null");
            }

            if(model.Password != model.ConfirmPassword)
            {
                return new UserManagerResponse
                {
                    Message = "Confirm password doesn't match the confirm password",
                    IsSuccess = false,
                };
            }

            var user = new User
            {
                UserName = model.UserName,
                Email = model.Email,
                Phone = model.Phone,
                RegistrationDate = DateTime.UtcNow,
                UserRole = EnumUserRole.Player,
            };

            var result = await _userManager.CreateAsync(user, model.Password);

            if(result.Succeeded)
            {
                return new UserManagerResponse
                {
                    Message = "User created succesfully!",
                    IsSuccess = true,
                };
            }
            return new UserManagerResponse
            {
                Message = "User did not create",
                IsSuccess = false,
                Errors = result.Errors.Select(e => e.Description)
            };
        }
    }
}
