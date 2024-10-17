<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="biblioteca">
<html>
<body>
<h2>Mi biblioteca</h2>
<table border="1">
<tr>
<th>Titulo</th>
<th>Autor</th>
<th>Editorial</th>
<th>año</th>
</tr>
<xsl:for-each select="libro">
<tr>
<td><xsl:value-of select="titulo"/></td>
<td><xsl:value-of select="Autor"/></td>
<td><xsl:value-of select="Editorial"/></td>
<td><xsl:value-of select="Year"/></td>
</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>