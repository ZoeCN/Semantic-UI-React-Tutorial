import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {
  Button, Icon, Divider, Progress, Header, Label, Grid, Image, Segment, List,
  Dimmer, Loader, Rail, Reveal, Step, Embed, Menu
} from 'semantic-ui-react'

let timer;

class App extends Component {
  state = {
    value: 0,
    pause: false,
    activeItem: 'tab1',
  };
  toggle = () => this.setState({ value: this.state.value < this.props.total ? this.state.value + 1 : this.props.total });
  onClickBtn = () => {
    this.setState({ pause: !this.state.pause });
    clearInterval(timer);
    if (this.state.pause) {
      return;
    }
    timer = setInterval(this.toggle, 300);
  }
  onClickReset = () => {
    this.setState({ value: 0, pause: false });
    clearInterval(timer);
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div className="App">
        <Header as='h1' icon>
          <Icon name='wechat' />
          Semantic-UI-Tutorial
        </Header>

        <Divider
          hidden
          clearing>
        </Divider>

        <Button animated="fade">
          <Button.Content visible>animated</Button.Content>
          <Button.Content hidden>
            <Icon name="qq" />
          </Button.Content>
        </Button>
        <Button
          content='Like'
          icon='heart'
          label={{ as: 'span', basic: true, content: '2,048' }}
          labelPosition='right'
        />

        <Divider
          hidden
          clearing>
        </Divider>

        <Button primary>
          Login
        </Button>
        <Divider horizontal>split</Divider>
        <Button secondary>Sign Up Now</Button>

        <Progress value={this.state.value} total={this.props.total} progress precision={0} autoSuccess indicating />
        <Button.Group>
          <Button
            icon='repeat'
            content='Reset'
            labelPosition='left'
            color='brown'
            size='medium'
            onClick={this.onClickReset}>
          </Button>
          <Button
            color='teal'
            content='Pause Progress'
            size='medium'
            onClick={this.onClickBtn}>
          </Button>
        </Button.Group>

        <Grid columns={6}>
          <Grid.Column>
            <Segment padded>
              <Image
                fluid
                label={{ as: 'a', color: 'blue', content: 'Food', icon: 'spoon', ribbon: true }}
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAJFBMVEXw8PDZ2dnb29vs7Ozu7u7a2trk5OTh4eHn5+fe3t7m5ubW1tYd0WNiAAADEUlEQVR4nO2d7XaCMAxAgZaPsvd/38nUUdq0eATElHvPfjhFpHehSYq6qgIAAAAAAAAAAAAAAAAAAAAAAAAAAAD4UszP2ZizFVSmPhsc4AAHOMABDnCAAxzgAAc4wIEqB4f3ygocVPZYKg0OjgYHOJjAAQ4mVDswY+9c3w122ysqdjC49rFF0216RbUOrPNrm3bY8IpaHdgm2GpDKCh1ECnYIkGpAxcpqOu3TwedDgZBQe3W923FDKLTgRQGdT2u7rsTPal0kFhiWA+EVhyfSged7GC1ohxlTyod9AkHawc/nULCzKnSgTwdrGaGv5m0je9X6SAuDl5ycFcX1xEqHaTiIH/wjx23UX5U6SAxH/zk+8fns/rwAZUOxBJJPNXF/YZjVOlA6BbEP/CCOXjC/KjSgXwytNljt+28ZbChTgdWcpBvHP26qlk+pNPBVPGFNPkZcXH6LJOoUgdxudzkj3wpbRkIWh2EU8KKgrCkWLSYah1Ugx/d+ZQQZ9PF/KnXwS2+HwvLTb961FFl6UvT7OCWH8wwDi8csomur/sD1e3gVYR6wiuULuHAtOE+az8/XsKBWFbO+fESDiQFXiBcwUFi+dE9C8sLOEh0mXNxfQEHQm9xOQep1ceCHQxBD51YdCrYwdRFLJuH1AJsqQ7Ge9z7EpJhUKaDuZP0JCTDoEQHxh/tv4TMO8CLc2CDevg5MaYuTRbowEQJ8C7BSt1SmQ6kavhPQiYMCnMgj3RMl8nFOUgOtEu+WaM0Bzad/br0Q0U4sM/3mGXHWbAD0zc33LSenA33gh14l5DfV6DbwYZxl+Ig3QVdxsFunwHV6yBb9lzEwdupsBwHuQbgIg52SgmaHeyVEhQ72PdrAVQ62C8l6HWwrwKVDrrmiZt+3P3GfPPxy+Om87dt5nv/n9Zc6ZrrKjjAwQQOcDCBAxxMKHBgzbFEH4b4QgfN0Shw8HFwgAMc4AAHOMABDnCAAxzg4IsdxJ/H/Czf8L+J2sOb5Tz575L4kISzOVsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQJJfX084wDL8aVYAAAAASUVORK5CYII='
              />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment padded>
              <Label attached='top'>HTML</Label>
              <Image
                fluid
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAJFBMVEXw8PDZ2dnb29vs7Ozu7u7a2trk5OTh4eHn5+fe3t7m5ubW1tYd0WNiAAADEUlEQVR4nO2d7XaCMAxAgZaPsvd/38nUUdq0eATElHvPfjhFpHehSYq6qgIAAAAAAAAAAAAAAAAAAAAAAAAAAAD4UszP2ZizFVSmPhsc4AAHOMABDnCAAxzgAAc4wIEqB4f3ygocVPZYKg0OjgYHOJjAAQ4mVDswY+9c3w122ysqdjC49rFF0216RbUOrPNrm3bY8IpaHdgm2GpDKCh1ECnYIkGpAxcpqOu3TwedDgZBQe3W923FDKLTgRQGdT2u7rsTPal0kFhiWA+EVhyfSged7GC1ohxlTyod9AkHawc/nULCzKnSgTwdrGaGv5m0je9X6SAuDl5ycFcX1xEqHaTiIH/wjx23UX5U6SAxH/zk+8fns/rwAZUOxBJJPNXF/YZjVOlA6BbEP/CCOXjC/KjSgXwytNljt+28ZbChTgdWcpBvHP26qlk+pNPBVPGFNPkZcXH6LJOoUgdxudzkj3wpbRkIWh2EU8KKgrCkWLSYah1Ugx/d+ZQQZ9PF/KnXwS2+HwvLTb961FFl6UvT7OCWH8wwDi8csomur/sD1e3gVYR6wiuULuHAtOE+az8/XsKBWFbO+fESDiQFXiBcwUFi+dE9C8sLOEh0mXNxfQEHQm9xOQep1ceCHQxBD51YdCrYwdRFLJuH1AJsqQ7Ge9z7EpJhUKaDuZP0JCTDoEQHxh/tv4TMO8CLc2CDevg5MaYuTRbowEQJ8C7BSt1SmQ6kavhPQiYMCnMgj3RMl8nFOUgOtEu+WaM0Bzad/br0Q0U4sM/3mGXHWbAD0zc33LSenA33gh14l5DfV6DbwYZxl+Ig3QVdxsFunwHV6yBb9lzEwdupsBwHuQbgIg52SgmaHeyVEhQ72PdrAVQ62C8l6HWwrwKVDrrmiZt+3P3GfPPxy+Om87dt5nv/n9Zc6ZrrKjjAwQQOcDCBAxxMKHBgzbFEH4b4QgfN0Shw8HFwgAMc4AAHOMABDnCAAxzg4IsdxJ/H/Czf8L+J2sOb5Tz575L4kISzOVsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQJJfX084wDL8aVYAAAAASUVORK5CYII='
              />
            </Segment>
          </Grid.Column>
        </Grid>

        <List bulleted horizontal>
          <List.Item icon='apple' content='apple' />
          <List.Item icon='amazon' content='amazon' />
          <List.Item icon='google' content='google' />
        </List>

        <List divided relaxed selection animated>
          <List.Item>
            <List.Content floated='right'>
              <Button content='Delete' />
            </List.Content>
            <List.Icon name='github' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
              <List.Description as='a'>Updated 10 mins ago</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='github' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
              <List.Description as='a'>Updated 22 mins ago</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='github' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
              <List.Description as='a'>Updated 34 mins ago</List.Description>
            </List.Content>
          </List.Item>
        </List>

        <Grid centered columns={3}>
          <Grid.Column>
            <Segment>
              <Image src='https://react.semantic-ui.com/assets/images/wireframe/paragraph.png' />

              <Rail attached position='left'>
                <Segment>Left Rail Content</Segment>
              </Rail>

              <Rail attached position='right'>
                <Segment>Right Rail Content</Segment>
              </Rail>
            </Segment>
          </Grid.Column>
        </Grid>

        <Reveal animated='move right'>
          <Reveal.Content visible>
            <Image src='https://react.semantic-ui.com/assets/images/wireframe/square-image.png' size='small' />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image src='https://react.semantic-ui.com/assets/images/avatar/large/nan.jpg' size='small' />
          </Reveal.Content>
        </Reveal>

        <Step.Group>
          <Step completed>
            <Icon name='truck' />
            <Step.Content>
              <Step.Title>
                Shipping
              </Step.Title>
              <Step.Description>
                Choose your shipping options
              </Step.Description>
            </Step.Content>
          </Step>
          <Step active>
            <Icon name='credit card' />
            <Step.Content>
              <Step.Title>
                Billing
              </Step.Title>
              <Step.Description>
                Enter billing information
              </Step.Description>
            </Step.Content>
          </Step>
          <Step disabled>
            <Icon name='hand peace'></Icon>
            <Step.Content>
              <Step.Title>Confirm Order</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>

        <div style={{width: 400 + 'px', height: 400 + 'px'}}>
        <Embed
          icon='youtube'
          placeholder='https://react.semantic-ui.com/assets/images/wireframe/square-image.png'
          url='http://k.youku.com/player/getFlvPath/sid/05108040918101256c991/st/mp4/fileid/03000A010059F35B1DDBC546388BD7586E99A2-0C63-4F62-5D17-4AAC172A524C?k=c80b0a59d5c4d7d1241335fb&hd=0&myp=0&ts=215&ctype=12&ev=1&token=0504&oip=3393307890&ep=cieVGkGNUs4J5CveiD8bYiqxfX4OXP4J9h%2BF8NJjALshQZ68nEzQs%2BnCPfpGEPoRelByF%2B75raXu%0AYzEWYfAwr2sQ2ziuO%2FrlivHk5akiteMBYRtHd8%2FTx1SeRjD1&ccode=0502&duration=215&expire=18000&psid=0620b194a7186d266f764f0ae9ab3446&ups_client_netip=ca41c4f2&ups_ts=1510804091&ups_userid=&utid=24aREvTvkAoCAcpBxPIPNN9D&vid=XMzExNDY3MTMxMg%3D%3D&vkey=A7f69391b920703f00f849c4072dac038'
        />
        </div>

        <Grid columns={5} relaxed>
          <Grid.Column>
            <Segment basic>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Divider vertical>Or</Divider>
          </Grid.Column>
          <Grid.Column>
            <Segment basic>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Divider vertical>And</Divider>
          </Grid.Column>
          <Grid.Column>
            <Segment basic>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
            </Segment>
          </Grid.Column>
      </Grid>

      <div>
        <Menu attached='top' tabular>
          <Menu.Item name='tab1' active={activeItem === 'tab1'} onClick={this.handleItemClick} />
          <Menu.Item name='tab2' active={activeItem === 'tab2'} onClick={this.handleItemClick} />
        </Menu>

        {activeItem==='tab1'?
          <Segment attached='bottom'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          </Segment>:
          <Segment attached='bottom'>
            <h1>hhh</h1>
          </Segment>
        }
      </div>

      </div>
    );
  }
}

App.defaultProps = {
  total: 100,
}

export default App;
