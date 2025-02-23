import chefClaudeLogo from '/src/assets/chef-claude-icon.png'

export default function Header() {
  return (
    <header>
      <img src={chefClaudeLogo} alt='Chef Claude' />
      <h1>Chef Mistral</h1>
    </header>
  )
}
