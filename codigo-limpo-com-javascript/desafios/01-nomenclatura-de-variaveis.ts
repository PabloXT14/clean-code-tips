// Nomenclatura de variáveis

const categories = [
  {
    title: 'User',
    minimumRequiredFollowers: 5
  },
  {
    title: 'Friendly',
    minimumRequiredFollowers: 50,
  },
  {
    title: 'Famous',
    minimumRequiredFollowers: 500,
  },
  {
    title: 'Super Star',
    minimumRequiredFollowers: 1000,
  },
]

export default async function getUserGithubCategory(req, res) {
  const username = String(req.query.username)

  if (!username) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const response = await fetch(`https://api.github.com/users/${username}`);

  if (response.status === 404) {
    return res.status(400).json({
      message: `User with username "${username}" not found`
    })
  }

  const githubUserData = await response.json()

  const orderedCategories = categories.sort((currentCategory, nextCategory) =>  nextCategory.minimumRequiredFollowers - currentCategory.minimumRequiredFollowers); 

  const userCategory = orderedCategories.find(category => githubUserData.followers > category.minimumRequiredFollowers)

  const githubUserCategory = {
    githubUsername: username,
    userCategory: userCategory ? userCategory.title : 'None'
  }

  return githubUserCategory
}

getUserGithubCategory(
  {
    query: {
      username: 'josepholiveira'
    }
  },
  {}
).then(response => console.log(response))