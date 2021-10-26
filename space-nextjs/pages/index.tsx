import styled from 'styled-components'

function HomePage() {
  return (
    <>
      <SubTitle>So, you want to travel to</SubTitle>
      <Title>Space</Title>
      <Desc>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </Desc>
      <Button>Explore</Button>
    </>
  )
}



const SubTitle = styled.p`
  margin-top: 48px;
  text-transform: uppercase;
  text-align: center;
  font-family: var(--ff-sans-cond);
  font-size: var(--fs-500);
  line-height: calc(19 / 16);
  letter-spacing: 2.7px;
`

const Title = styled.h1`
  font-family: var(--ff-serif);
  text-align: center;
  font-size: var(--fs-900);
  line-height: calc(100 / 80);
  text-transform: uppercase;
  margin-top: 16px;
`

const Desc = styled.p`
  font-family: var(--ff-sans-normal);
  text-align: center;
  font-size: var(--fs-400);
  line-height: calc(25 / 15);
  color: var(--clr-light);
  margin-top: 16px;
`

const Button = styled.button`
  --diameter: 150px;

  display: block;
  width: var(--diameter);
  height: var(--diameter);
  text-align: center;
  border: none;
  background-color: hsl(var(--clr-white));
  color: hsl(var(--clr-dark));
  border-radius: 50%;
  font-family: var(--ff-serif);
  font-size: var(--fs-700);
  letter-spacing: 1.25px;
  text-transform: uppercase;

  /*  ---------------------------------  */
  /*  FIX: abstract into a <Seprator />  */
  /*  ---------------------------------  */
  margin-right: auto;
  margin-left: auto;
  margin-top: 81px;
  cursor: pointer;
`

export default HomePage
