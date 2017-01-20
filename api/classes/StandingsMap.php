<?php

class StandingsMap extends Mapper {
    public function getStandings() {
        $sql = "SELECT bnp_teams.tid, tname, MAX(wid) AS wid,
                SUM(twins) AS wins, SUM(tloss) AS loss, REPLACE( CAST( FORMAT(SUM(twins)/(SUM(twins) + SUM(tloss)), 3) AS CHAR), '0.', '.' )  as pcnt,
                SUM(tpins) AS tpins FROM bnp_teams JOIN bnp_points
                ON bnp_points.tid = bnp_teams.tid
                GROUP BY tid
                ORDER BY wins DESC, tpins DESC";
        $stmt = $this->db->query($sql);

        $results = [];
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $results[] = $row;
        }
        return json_encode($results, JSON_NUMERIC_CHECK);
    }
}

