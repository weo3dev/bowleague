<?php

class TeamPinsMap extends Mapper {
	public function getTeamPins($id) {
        $sql = "SELECT wid, tpins
					FROM bnp_points
					WHERE tid = $id";
        $stmt = $this->db->query($sql);

        $results = [];
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $results[] = $row;
        }
        return json_encode($results, JSON_NUMERIC_CHECK);
	}

}

?>
