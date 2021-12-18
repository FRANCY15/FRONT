import { gql } from '@apollo/client';




const CREAR_OBSERV = gql`
 mutation AgregarObservacion($idProyecto: String, $observaciones: String) {
  agregarObservacion( idProyecto: $idProyecto, observaciones: $observaciones)
}
`;

export {CREAR_OBSERV};