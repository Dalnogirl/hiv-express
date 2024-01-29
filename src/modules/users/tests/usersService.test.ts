import * as UsersService from "../usersService"


describe('Users Service:', () => {
    const MOCK_USERS = [
        {id: 1, name: 'John', email: 'John@gmail.com', password: 'admin', age: 10}
    ]
    it('should return all users', async () => {
        const mockSelectAllUsers: UsersService.GelAllUsersDiParam['selectAllUsers'] = () => Promise.resolve(({success: true, users:MOCK_USERS}))
        const result = await UsersService.getAllUsers({selectAllUsers: mockSelectAllUsers})

        expect(result).toBe(MOCK_USERS)
    })
})