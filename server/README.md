1 . [GitHub Link Server ](https://github.com/Shihab2022/Lost-And-Found/tree/main/server)

2.[ GitHub Link Front end ](https//github.com/Shihab2022/Lost-And-Found/tree/main/front-end)

3. [Local Server Api](http://localhost:5000/)

4 . [Local Front Api](http://localhost:3000/)

5 . [Prod Server api](https://assignment9-omega.vercel.app/)

6 . [Prod Front api ](https://front-end-psi-tan.vercel.app/)

Admin Login Credentials :

```
Email : jon@example.com
Password : password

```

User Login

```
Email : john55@example.com
Password : password
```

## All the end point

1. **Register User**

   - `POST https://assignment9-omega.vercel.app/api/register`
   - Description: Registers a new user in the system.

2. **Login User**

   - `POST https://assignment9-omega.vercel.app/api/login`
   - Description: Authenticates a user and returns a token.

3. **Create Found Item Category**

   - `POST https://assignment9-omega.vercel.app/api/found-item-categories`
   - Description: Creates a new category for found items (requires authentication).

4. **Create Found Item**

   - `POST https://assignment9-omega.vercel.app/api/found-items`
   - Description: Creates a new found item record (requires authentication).

5. **Create Lost Item**

   - `POST https://assignment9-omega.vercel.app/api/lost-items`
   - Description: Creates a new lost item record (requires authentication).

6. **Get All Found Items**

   - `GET https://assignment9-omega.vercel.app/api/found-items`
   - Description: Retrieves a list of all found items.

7. **Get All Categories**

   - `GET https://assignment9-omega.vercel.app/api/category`
   - Description: Retrieves a list of all categories.

8. **Create Claim**

   - `POST https://assignment9-omega.vercel.app/api/claims`
   - Description: Creates a new claim for an item (requires authentication).

9. **Get All Claims**

   - `GET https://assignment9-omega.vercel.app/api/claims`
   - Description: Retrieves a list of all claims (requires authentication).

10. **Update Claim Status**

    - `PUT https://assignment9-omega.vercel.app/api/claims/:claimId`
    - Description: Updates the status of a claim (requires authentication and request validation).

11. **Get My Profile Info**

    - `GET https://assignment9-omega.vercel.app/api/my-profile`
    - Description: Retrieves the profile information of the authenticated user.

12. **Update Profile Info**

    - `PUT https://assignment9-omega.vercel.app/api/my-profile`
    - Description: Updates the profile information of the authenticated user.

13. **Get All Users**

    - `GET https://assignment9-omega.vercel.app/api/users`
    - Description: Retrieves a list of all users.

14. **Delete User**

    - `DELETE https://assignment9-omega.vercel.app/api/user`
    - Description: Deletes a user from the system.

15. **Update User Status**

    - `PUT https://assignment9-omega.vercel.app/api/user`
    - Description: Updates the status of a user.

16. **Get My Lost Items**

    - `GET https://assignment9-omega.vercel.app/api/myLostItem`
    - Description: Retrieves a list of lost items reported by the authenticated user.

17. **Get My Found Items**

    - `GET https://assignment9-omega.vercel.app/api/myFoundItem`
    - Description: Retrieves a list of found items reported by the authenticated user.

18. **Delete My Lost Item**
    - `DELETE https://assignment9-omega.vercel.app/api/myLostItem`
    - Description: Deletes a lost item reported by the authenticated user.
