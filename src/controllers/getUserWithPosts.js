const { PrismaClient } = require('../../generated/prisma'); // adjust path if needed
const prisma = new PrismaClient();


exports.getUserWithPosts = async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      if (isNaN(userId)) {
        return res.status(400).json({ message: 'Invalid user ID' });
      }
  
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          email: true,
          name: true,
          posts: {
            select: {
              id: true,
              title: true,
              content: true
            }
          }
        }
      });
      
      if (!user) return res.status(404).json({ message: 'User not found' });
  
      res.status(200).json({ user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  