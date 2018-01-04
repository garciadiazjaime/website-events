import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const openGrpnPage = url => {
  window.open(url, '_blank');
}

export default ({ event }) => (
  <Card>
    <CardMedia
      overlay={<CardTitle title={event.title} />}
    >
      <img src={event.image} alt={event.title} />
    </CardMedia>
    <CardTitle subtitle={event.description} />
    <CardActions>
      <FlatButton label="Leer más" onClick={() => openGrpnPage(event.url)} />
    </CardActions>
    <br />
  </Card>
)

